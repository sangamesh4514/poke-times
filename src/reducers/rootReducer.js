const initState={
  posts:[{ id: '1', title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"},
  { id:' 2', title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"},
  { id:' 3', title: "ea molestias quasi exercitationem repellat qui ipsa sit aut", body: "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore et velit aut"},
  { id:' 4', title: "eum et est occaecati", body: "ullam et saepe reiciendis voluptatem adipisci↵sit … ipsam iure↵quis sunt voluptatem rerum illo velit"},
  { id: '5', title: "nesciunt quas odio", body: "repudiandae veniam quaerat sunt sed↵alias aut fugi…sse voluptatibus quis↵est aut tenetur dolor neque"},
  { id: '6', title: "dolorem eum magni eos aperiam quia", body: "ut aspernatur corporis harum nihil quis provident …s↵voluptate dolores velit et doloremque molestiae"},
  { id: '7', title: "magnam facilis autem", body: "dolore placeat quibusdam ea quo vitae↵magni quis e…t excepturi ut quia↵sunt ut sequi eos ea sed quas"},
  { id: '8', title: "dolorem dolore est ipsam", body: "dignissimos aperiam dolorem qui eum↵facilis quibus…↵ipsam ut commodi dolor voluptatum modi aut vitae"},
  { id: '9', title: "nesciunt iure omnis dolorem tempora et accusantium", body: "consectetur animi nesciunt iure dolore↵enim quia a…st aut quod aut provident voluptas autem voluptas"},
  { id: '10', title: "optio molestias id quia eum", body: "quo et expedita modi cum officia vel magni↵dolorib…it↵quos veniam quod sed accusamus veritatis error"},
  { id: '11', title: "et ea vero quia laudantium autem", body: "delectus reiciendis molestiae occaecati non minima…luptates ut commodi qui incidunt↵ut animi commodi"},
  { id: '12', title: "in quibusdam tempore odit est dolorem", body: "itaque id aut magnam↵praesentium quia et ea odit e…uia id voluptatem↵incidunt ea est distinctio odio"},
  {id: '13', title: "dolorum ut in voluptas mollitia et saepe quo animi", body: "aut dicta possimus sint mollitia voluptas commodi …ssumenda consectetur porro architecto ipsum ipsam"}

]
}

const rootReducer=(state=initState,action)=>{
  if(action.type==="DELETE_POST"){
    let newposts=state.posts.filter(post=>{
      return post.id!==action.id
    })
    return{
      ...state,
      posts:newposts
    }
  }
       return (state);
}
export default rootReducer;
