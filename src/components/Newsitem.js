import React, { Component } from 'react'



export class Newsitem extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props
    return (
      <div className='my-3'>
        <div className="card" >
            <img src={imageUrl?imageUrl:"https://www.aljazeera.com/wp-content/uploads/2024/09/AP24262521209210-1726687336.jpg?resize=1920%2C1440"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title?title:"Mitchells & Butlers (OTCMKTS:MBPFF) Hits New 52-Week High at $3.85"}...</h5>
                <span class="badge text-bg-success">Source : {source}</span>
                <p className="card-text">{description?description:"Australia’s leading market index is continuing its relentless march forward after setting another new record high in early trade on Friday."}...</p>
                <a href={newsUrl?newsUrl:"https://www.marketbeat.com/logos/mitchells-butlers-logo-1200x675.jpg"} className="btn btn-sm btn-primary">Read More</a>
                <p class="card-text"><small class="text-body-secondary">By {author} On {new Date(date).toGMTString()}</small></p>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
