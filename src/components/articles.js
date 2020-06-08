
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from '../css/articles.css';
import articles from '../api/articles.json';
import LazyLoad from 'react-lazyload';
import { Modal,Button, ButtonToolbar,Col,Form,Row } from 'react-bootstrap';
import $ from 'jquery';


const Articles = () => {

   // var editContent,editDate,editImage,editLikes;

    const [show, setShow] = useState(false);
    var [editTitle,setTitle] = useState('');
    var [editContent,setContent] = useState('');
    var [editDate,setDate] = useState('');
    var [editImage,setImage] = useState('');
    var [editLikes,setLikes] = useState('');
    var edit_id;
    //const [showASF,setShowASF] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (data) => {

    edit_id = data.id;
    localStorage.setItem('edit_id',JSON.stringify(edit_id));

    setTitle(data.title);
    setContent(data.article_text);
    setDate(data.publish_date);
    setImage(data.image_or_video);
    setLikes(data.likes_count);
    
    setShow(true);

  }



    const HandleSubmitEditArticle = (e)=> {
        let form = e.target;
 
        let articlesArr = JSON.parse(localStorage.getItem('articles_data'));

        edit_id =  JSON.parse(localStorage.getItem('edit_id'));
        console.log(edit_id);
        
     
        for(let art in articlesArr){
            if(articlesArr[art]!=undefined){
                console.log(edit_id);
            if(articlesArr[art].id==edit_id){
                //articlesArr.splice(art,1);
                 
     
                articlesArr[art].title = form.elements.formGridTitle.value;
                articlesArr[art].image_or_video = form.elements.formGridImage.value;
                articlesArr[art].publish_date=form.elements.formGridDate.value;
                articlesArr[art].article_text=form.elements.formGridContent.value;
                articlesArr[art].likes_count =  form.elements.formGridLikes.value;
              }
            }
        }
     
        localStorage.setItem('articles_data',JSON.stringify(articlesArr));
      setArticles(articlesArr);
      localStorage.setItem('reset_searchable_data',JSON.stringify(articlesArr));
    }

    const handleDelete = (id) => {

        var articles_arr = JSON.parse(localStorage.getItem('articles_data'));
        if(articles_arr==null){
            articles_arr = [];
        }


        for(let art in articles_arr){
            if(articles_arr[art]!=undefined){
            if(articles_arr[art].id==id){
                articles_arr.splice(art,1);
              }
            }
        }


      
      console.log(articles_arr);
      localStorage.setItem('articles_data',JSON.stringify(articles_arr));
      setArticles(articles_arr);
  
  
    }

    var [articlesData, setArticles] = useState(articles);


var articles_array = JSON.parse(localStorage.getItem('articles_data'));
if(articles_array==null){
    articles_array = articlesData;
}
const articlesList = articles_array.map((data,index) => {
    return(
        
        <LazyLoad height={200} throttle={200} key={data.id}>

            <div className="col-12 col-md-6 col-lg-3 mb-4">
    <div className="card">
      <img className="card-img-top" src={data.image_or_video}/>
      
      <h5 className="card-title" style={{textAlign:"center",marginBottom:"5px"}}><b>{data.title}</b></h5>
      <div className="card-body">
        <p style={{fontSize:'small'}}>Published on {data.publish_date}</p>
        <p className="card-text">{data.article_text}</p>
        <i className="fa fa-thumbs-up" aria-hidden="true">{data.likes_count}</i>
        <div style={{float:"right"}}>
        <span style={{cursor:"pointer"}} onClick={()=>handleShow(data)} ><i className="fa fa-edit"> </i></span>
        <span style={{marginLeft:"5px", cursor:"pointer"}} onClick={()=>handleDelete(data.id)}><i className="fa fa-trash"> </i></span>
        </div> 
      </div>
    </div>
  </div>


        </LazyLoad>



        
    )
})



  return (

    <React.Fragment>

        <div className="row ml-5">
    {articlesList}
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
      

            <Form onSubmit={HandleSubmitEditArticle}>
  <Form.Group controlId="formGridTitle" >
    <Form.Label>Title</Form.Label>
    <Form.Control placeholder=""  defaultValue={editTitle} />
  </Form.Group>

  <Form.Group controlId="formGridContent">
    <Form.Label>Article Content</Form.Label>
    <Form.Control placeholder="" defaultValue={editContent} />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridDate">
      <Form.Label>Publish Date</Form.Label>
      <Form.Control defaultValue={editDate} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridImage">
      <Form.Label>Image URL</Form.Label>
      <Form.Control defaultValue={editImage}/>
      
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLikes">
      <Form.Label>Likes</Form.Label>
      <Form.Control defaultValue={editLikes} />
    </Form.Group>
  </Form.Row>




  <Button variant="primary" type="submit" onClick={handleClose}>
    Submit
  </Button>
  <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
</Form>
        

        </Modal.Body>

      </Modal>


      {/* end of first  */}




    </React.Fragment>

    



  );
};

export default Articles;
