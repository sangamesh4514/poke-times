import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import pokeball from '../pokeball.png'
import {connect} from 'react-redux'

class Home extends Component{

  componentDidUpdate(prevProps,prevState) {
      if (this.props !== prevProps) {
      console.log('userId changed ');
   }
 }
      render(){
        const {posts}=this.props
        const postlist=posts.length?(
          posts.map((post)=>{
            return(
              <div className="post card" key={post.id}>
              <img src={pokeball} alt="pokeball"/>
              <div className="card-content">
              <Link to={'/'+post.id}>
              <span className="card-title"><h5>{post.title}</h5></span>
              </Link>
              <h6>{post.body}</h6>
              </div></div>
            )

          })
        ):(
          <div className="container center"><h1>data loading...</h1></div>
        )
        return (
          <div className="container home">
          {postlist}
          </div>
        );
      }

}
const mapStateToProps=(state)=>{
  return{
    posts:state.posts
  }
}

export default connect(mapStateToProps)(Home);
