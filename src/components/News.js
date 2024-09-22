import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
      static defaultProps={
        country:"us",
        pageSize:8,
        category:"general",
      }
      static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
      }

        constructor(){
        super();
        console.log("this is a constructor");
        this.state={
            articles:[],
            loading:false,
            page:1,
            
        }
        
      }
      async updateNews(pageNo){
        
        const url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=74e66802ed1142208215a51079ed3c88&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        //let url=`https://newsapi.org/v2/top-headlines?country=us&${this.props.category}&apiKey=74e66802ed1142208215a51079ed3c88&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data=await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData)
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})}


      async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=74e66802ed1142208215a51079ed3c88&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        //let url=`https://newsapi.org/v2/top-headlines?country=us&${this.props.category}&apiKey=74e66802ed1142208215a51079ed3c88&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true});
        let data=await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData)
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})

          } 
          handleNextClick=async ()=>{
            /* if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
      
            }
            else{
            console.log("Next button");
            let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=74e66802ed1142208215a51079ed3c88&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      
            //let url=`https://newsapi.org/v2/top-headlines?country=us&${this.props.category}&apiKey=74e66802ed1142208215a51079ed3c88&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
            this.setState({loading:true})
            let data=await fetch(url);
            let parsedData=await data.json()
            
            this.setState({articles:parsedData.articles,
              page:this.state.page+1,
              loading:false
            })
      
              } */
             this.setState({page:this.state.page+1});
             this.updateNews();
            }
            
            handlePreviousClick=async ()=>{
              /* console.log("Previous button");
              let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=74e66802ed1142208215a51079ed3c88&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        
              //let url=`https://newsapi.org/v2/top-headlines?country=us&${this.props.category}&apiKey=74e66802ed1142208215a51079ed3c88&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
              this.setState({loading:true}) 
              let data=await fetch(url);
                let parsedData=await data.json()
                console.log(parsedData)
                this.setState({articles:parsedData.articles,
                  page:this.state.page-1,
                  loading:false
                })
         */
                this.setState({page:this.state.page-1})
                this.updateNews()
              
            } 
          

  render() {
   
      
    
    
    return (
      <div className='container'>
      
        
        <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }} >NewsPanda Top Headlines</h1>
        {this.state.loading&&<Spinner/>}
        <div className="row" >
          {!this.state.loading&&this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <Newsitem title={element.title.length>20?element.title.slice(0,45):element.title} description={element.description==null?element.description:element.description.length>20 ?element.description.slice(0,45):element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
                   </div>
          })}  
            
        </div>  
        
      
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" class="btn btn-info" onClick={this.handlePreviousClick}>Previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-info" onClick={this.handleNextClick}>Next</button>
      

      
      </div>
      </div>
    )
  }
}

export default News
