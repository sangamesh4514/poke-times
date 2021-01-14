import React,{Component} from 'react'
import { connect } from 'react-redux'
import deletepost from '../actions/deleteaction'

class Post extends Component{

  handleClick=()=>{
    this.props.deletePost(this.props.post.id)
    this.props.history.push("/")
  }

  render(){
    console.log(this.props.post)
    const post = this.props.post?
    (
      <div className="container">
      <h4>{this.props.post.title}</h4>
      <h6>{this.props.post.body}</h6>
      <div className="center">
      <button className="btn grey" onClick={this.handleClick}>DELETE</button>
      </div></div>
    ):(
      <div className="container"><h4>loading....</h4></div>
    )
    return(
      <div className="container">
      {post}
      </div>
    )
  }
}
const mapStateToProps=(state,ownProps)=>{
  let id=ownProps.match.params.post_id;
  console.log(id)
  return {
    post:state.posts.find( post => post.id===id)
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    deletePost:(id)=>{dispatch(deletepost(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);
