 import {useState, useEffect} from 'react';
import BlogList from './BlogList';
 
 const Home = () => {
     const [blogs, setBlogs] = useState([
         {title: 'My New Website', body:'lorem ipsum', author:'Atsdaq', id:1},
         {title: 'Welcome to the party', body:'lorem ipsum', author:'Shiraz', id:2},
         {title: 'What you on about ', body:'lorem ipsum', author:'Atsdaq', id:3}
     ]); 

     const [name, setName] = useState('mario');

     const handleDelete = (id) => {
         const newBlogs = blogs.filter( blog => blog.id !== id);
         setBlogs(newBlogs); 
     }

     useEffect(() => {
         console.log('use effect ran'); 
         console.log(name);
     },[name]); 
     return (  
        <div className="home">
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> 
        <button onClick={()=> setName ('lugi')}>change name</button>
        <p>{name}</p>
         </div>
     );
 } 
  
 export default Home;