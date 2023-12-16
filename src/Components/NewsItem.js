import React from 'react'

const NewsItem=(props)=>{
    let {title,description,imageurl,newsUrl,author,publishedAt,source}=props;
    return (
      <div className="my-4">
        <div className="card " >
          <div style={{display:"flex" ,justifyContent:"flex-end",
        position:"absolute", right:"0"}}>
          <span class=" badge rounded-pill bg-danger" >
                      {source.name}
          </span>
          </div>
            <img src={!imageurl?"https://img.freepik.com/premium-photo/creative-glowing-blue-breaking-news-pattern-background-with-globe-headline-communication-global-world-concept-3d-rendering_670147-21161.jpg":imageurl} className="card-img-top" alt="..."/>
            <div className="card-body h-100">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p class="card-text"><small className="text-body-secondary">By {author?author:"unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
                <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-sm btn-primary , mt-auto">Read More</a>
             </div>
       </div>
      </div>
    )
}

export default NewsItem
