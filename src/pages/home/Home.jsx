import "./Home.css"; // jese Home.css same hi directory me tha to hmne direct ./Home.css likha kyuki wo same directory ka hi tha
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect } from "react";

/*1) pehle ../ ka mtlb home.jsx se pages me gaye
  2) dusre ../ ka mtlb h pages se src folder me gye
  3) then src se header me gye
  4) then header folder se Header.jsx me gye
*/

export default function Home() {
  // const [posts,setPosts] = useState([]);

  // useEffect(()=> {
  //   const fetchPosts = async()=>{
  //     const res = await axios.get("/posts")
  //     setPosts(res.data);
  //   }
  //   fetchPosts();
  // },[])
  return (
    <>
      <Header/>
      <div className="home"> 
          <Posts />
          <Sidebar />
       </div>
    </>
    
  )
}

// "../" means ek up jao fir current directory
// "./" ka mtlb current directory