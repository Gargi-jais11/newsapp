import React,{ useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
  const [ articles,setArticles ]=useState([])
  const [ loading,setLoading ]=useState(true)
  const [ page,setPage ]=useState(1)
  const [ totalResults,setTotalResults ]=useState(0)

      const capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
      }

const updateNews=async()=>
{
  props.setProgress(10);
   const url=`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)

    let data=await fetch(url);
    props.setProgress(30);
    let parseddata=await data.json();
    props.setProgress(70);
    setArticles(parseddata.articles)
    setTotalResults(parseddata.totalResults)
    setLoading(false)
    props.setProgress(100);

}
useEffect(()=>{
  document.title=`${capitalizeFirstLetter(props.category)}-NewsMonkey`;
  updateNews();
  //eslint-disable-next-line
},[])


  const fetchMoreData = async() => {
    const url=`https://newsapi.org/v2/top-headlines?&country=${props.country}&category=${props.category}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data=await fetch(url);
    let parseddata=await data.json();
    setArticles(articles.concat(parseddata.articles))
    setTotalResults(parseddata.totalResults)
    setLoading(false)
  
};

   
    return (
      <>
        <h1 className="text-center" style={{margin:'30px 0px', marginTop:"90px", color:props.mode==='dark'?'white':'black'} }>NewMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<spinner/>}
        >
          <div className="container">
        <div className="row">
            { articles.map((element)=>{
                return <div className="col-md-3" key={element.url} >
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} 
                imageurl={element.urlToImage}
                newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source}
                />
                </div>
        })}
        </div>
        </div>
        
        </InfiniteScroll>
        
      </>
    )
  }

News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general'
}
News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}
export default News
