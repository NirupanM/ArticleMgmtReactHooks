
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route,useHistory } from 'react-router-dom';
import { Modal,Button, ButtonToolbar,Col,Form,Row,Dropdown } from 'react-bootstrap';
import Articles from './articles';
import '../css/home.css';
import articles from '../api/articles.json';
import $ from 'jquery';
const Home = () => {

    


const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  
  var [articlesData, setArticles] = useState(articles);

  var index = 0;
  
  const history = useHistory();



useEffect(()=>{
  console.log(articlesData);
  localStorage.setItem('articles_data',JSON.stringify(articlesData));
  setArticles(articlesData);
  localStorage.setItem('reset_searchable_data',JSON.stringify(articlesData));
},[]);


  const HandleSubmitNewArticle = (e) => {
      //console.log(e.target);
      let form = e.target;
     // console.log(form.elements.formGridTitle.value);
      let articlesArr = JSON.parse(localStorage.getItem('articles_data'));
      if(articlesArr==null){
          articlesArr = [];
      }
      console.log(articlesArr);
      var articleObj = {
        "id":articlesArr.length+1,
        "title": form.elements.formGridTitle.value,
        "image_or_video":form.elements.formGridImage.value,
        "publish_date":form.elements.formGridDate.value,
        "article_text":form.elements.formGridContent.value,
        "likes_count": form.elements.formGridLikes.value
      };

      articlesArr.push(articleObj);
      //articlesData = articlesArr;
      localStorage.setItem('articles_data',JSON.stringify(articlesArr));
      setArticles(articlesArr);
      localStorage.setItem('reset_searchable_data',JSON.stringify(articlesArr));



  }



const onChangeFilterOptions = (e) => {

    console.log(e.target.value);

    if(e.target.value==""){
        resetChoices();


    }
    if(e.target.value=="sortTitleDsc"){
        sortTitleDsc();
    }
    if(e.target.value=="sortTitleAsc"){
        sortTitleAsc();

    }
    if(e.target.value=="sortDateAsc"){
        sortDateAsc();
    }
    if(e.target.value=="sortDateDsc"){
        sortDateDsc();
    }
    if(e.target.value=="sortLikesAsc"){
        sortLikesAsc();
    }
    if(e.target.value=="sortLikesDsc"){
        sortLikesDsc();
    }
    
    

}

const resetChoices=()=>{

    let articlesArr = JSON.parse(localStorage.getItem('reset_searchable_data'));
    if(articlesArr==null){
        articlesArr = [];
    }

    localStorage.setItem('articles_data',JSON.stringify(articlesArr)); 
    setArticles(articlesArr);


}

const sortTitleAsc =()=>{
    if(index==0){
    localStorage.setItem('original_array',JSON.stringify(JSON.parse(localStorage.getItem('articles_data'))));
      
  }
    let articlesArr = JSON.parse(localStorage.getItem('articles_data'));
    if(articlesArr==null){
        articlesArr = [];
    }

    let sortedArray = JSON.parse(JSON.stringify(articlesArr));

    sortedArray.sort(function(a, b){
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        return 0;
    })


    console.log(sortedArray);
    localStorage.setItem('articles_data',JSON.stringify(sortedArray));
    setArticles(sortedArray);
    index++;
}

const sortTitleDsc =()=>{
    if(index==0){
        localStorage.setItem('original_array',JSON.stringify(JSON.parse(localStorage.getItem('articles_data'))));
        }
        let articlesArr = JSON.parse(localStorage.getItem('articles_data'));
        if(articlesArr==null){
            articlesArr = [];
        }
    
        let sortedArray = JSON.parse(JSON.stringify(articlesArr));
    
        sortedArray.sort(function(a, b){
            if(a.title < b.title) { return 1; }
            if(a.title > b.title) { return -1; }
            return 0;
        })
    
    
        console.log(sortedArray);
        localStorage.setItem('articles_data',JSON.stringify(sortedArray));
        setArticles(sortedArray);
        index++;
}

const sortDateAsc =()=>{
    if(index==0){
        localStorage.setItem('original_array',JSON.stringify(JSON.parse(localStorage.getItem('articles_data'))));
        }
    let articlesArr = JSON.parse(localStorage.getItem('articles_data'));
    if(articlesArr==null){
        articlesArr = [];
    }
    


    var sortedArray = articlesArr.sort(function(a,b) {
        var aComps = a.publish_date.split("/");
        var bComps = b.publish_date.split("/");
        console.log(aComps);
        console.log(bComps);
        var aDate = new Date(aComps[2], aComps[1], aComps[0]);
        var bDate = new Date(bComps[2], bComps[1], bComps[0]);
        return aDate.getTime() - bDate.getTime();
    });
    localStorage.setItem('articles_data',JSON.stringify(sortedArray));
    setArticles(sortedArray);

    index++;
}

const sortDateDsc =()=>{
    if(index==0){
        localStorage.setItem('original_array',JSON.stringify(JSON.parse(localStorage.getItem('articles_data'))));
        }
    let articlesArr = JSON.parse(localStorage.getItem('articles_data'));
    if(articlesArr==null){
        articlesArr = [];
    }
    


    var sortedArray = articlesArr.sort(function(a,b) {
        var aComps = a.publish_date.split("/");
        var bComps = b.publish_date.split("/");
        console.log(aComps);
        console.log(bComps);
        var aDate = new Date(aComps[2], aComps[1], aComps[0]);
        var bDate = new Date(bComps[2], bComps[1], bComps[0]);
        return bDate.getTime() - aDate.getTime();
    });
    localStorage.setItem('articles_data',JSON.stringify(sortedArray));
    setArticles(sortedArray);

    index++;
}

const sortLikesAsc =()=>{
    if(index==0){
        localStorage.setItem('original_array',JSON.stringify(JSON.parse(localStorage.getItem('articles_data'))));
        }
        let articlesArr = JSON.parse(localStorage.getItem('articles_data'));
        if(articlesArr==null){
            articlesArr = [];
        }
    
        let sortedArray = JSON.parse(JSON.stringify(articlesArr));
    
        sortedArray.sort(function(a, b){
            if(a.likes_count < b.likes_count) { return -1; }
            if(a.likes_count > b.likes_count) { return 1; }
            return 0;
        })
    
    
        console.log(sortedArray);
        localStorage.setItem('articles_data',JSON.stringify(sortedArray));
        setArticles(sortedArray);
        index++;
}

const sortLikesDsc =()=>{
    if(index==0){
        localStorage.setItem('original_array',JSON.stringify(JSON.parse(localStorage.getItem('articles_data'))));
        }
        let articlesArr = JSON.parse(localStorage.getItem('articles_data'));
        if(articlesArr==null){
            articlesArr = [];
        }
    
        let sortedArray = JSON.parse(JSON.stringify(articlesArr));
    
        sortedArray.sort(function(a, b){
            if(a.likes_count < b.likes_count) { return 1; }
            if(a.likes_count > b.likes_count) { return -1; }
            return 0;
        })
    
    
        console.log(sortedArray);
        localStorage.setItem('articles_data',JSON.stringify(sortedArray));
        setArticles(sortedArray);
        index++;
}

const FilterTitle  =(e)=>{

    console.log(e.target.value);

    if(index==0){
        localStorage.setItem('original_array',JSON.stringify(JSON.parse(localStorage.getItem('articles_data'))));
        }
        let articlesArr = JSON.parse(localStorage.getItem('reset_searchable_data'));
        if(articlesArr==null){
            articlesArr = [];
        }
    
        let filteredArray = JSON.parse(JSON.stringify(articlesArr));
    

        let z=[];
        for(let y in filteredArray){
            if(filteredArray[y].title.includes(e.target.value)){
              z.push(filteredArray[y]);
            }
        }
    
    

        localStorage.setItem('articles_data',JSON.stringify(z));
        setArticles(z);
        index++;


}

const onLogout = () => {
  history.push('/login')
}


//Search filter for Date and Likes Not Applicable

const filterDate =()=>{
   
}

const filterLikes =()=>{
   
}






  return (
    <Router>
       
  {/* <!--Navbar --> */}
  <div className=" outerContainer">
<nav className="row mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1" style={{backgroundColor:"black"}}>
  <a className="navbar-brand" href="#">            Top News</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
    aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent-555">
    
    <ul className="navbar-nav ml-auto nav-flex-icons">
    
      <li className="nav-item avatar">
                <span style={{color:"white",marginRight:"12px"}}>Welcome back</span>
          <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0"
            alt="avatar image"height="50px" style={{marginRight:"12px"}} />

            <button
                  style={{
                    color:"white"
                  }}
                  type="button"
                //   disabled={isSubmitting || !isEmpty(validateForm(values))}
                  className="btn btn-large btn-secondary"
                  onClick={onLogout
                  }
                >
                    Sign Out
                </button>

    
      </li>
    </ul>
  </div>
</nav>
{/* <!--/.Navbar --> */}

      <div className="dashContainer">
        
        <button className="btn btn-large btn-dark" style={{marginLeft:"90%",marginTop:"3%"}}><i className="fa fa-plus" aria-hidden="true" onClick={handleShow} > New Article</i></button>
        

<select
                    className="btn btn-large btn-dark" style={{marginLeft:"90%",width:"8%",marginTop:"1%"}}
                    id="sort_filter_type"
                    onChange={e => onChangeFilterOptions(e)}
                  >
                      <option value="">Sort Reset</option>
                    <option value="sortTitleAsc">sortTitleAsc</option>
                    <option value="sortTitleDsc">sortTitleDsc</option>
                    <option value="sortDateAsc">sortDateAsc</option>
                    <option value="sortDateDsc">sortDateDsc</option>
                    <option value="sortLikesAsc">sortLikesAsc</option>
                    <option value="sortLikesDsc">sortLikesDsc</option>
                   </select>

       

<Form  className="" style={{width: "8%",
marginLeft: "90%",
marginTop: "1%"}}>
<Form.Group controlId="formGridTitle">
{/* <Form.Label>Title</Form.Label>  */}
<Form.Control placeholder="Search for Title" onChange={FilterTitle} style={{backgroundColor:"#343a40", color:"white"}} />
</Form.Group>

</Form>
        
        <div className="mt-5"><Articles 
        
        /></div>
        
      </div>
{/* Modal for adding new article*/}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
      

            <Form onSubmit={HandleSubmitNewArticle}>
  <Form.Group controlId="formGridTitle">
    <Form.Label>Title</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Group controlId="formGridContent">
    <Form.Label>Article Content</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridDate">
      <Form.Label>Publish Date</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridImage">
      <Form.Label>Image URL</Form.Label>
      <Form.Control/>
      
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLikes">
      <Form.Label>Likes</Form.Label>
      <Form.Control />
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




      {/* <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Sorting and Filtering</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}

      {/* <Modal show={showASF} onHide={handleCloseASF}>
        <Modal.Header closeButton>
          <Modal.Title>Choose Option</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
        <Form onSubmit={HandleSubmitASF}>
       
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Sort/Filter
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Sort Alphabetically"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Sort by Time/Date"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Sort by Likes"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>


  <Button variant="primary" type="submit" onClick={handleCloseASF}>
    Submit
  </Button>
  <Button variant="danger" onClick={handleCloseASF}>
            Close
          </Button>

  </Form>
      

          
        

        </Modal.Body>

      </Modal> */}



        {/* Modal for adding new article*/}

      {/* <Modal show={showUpdateArticle} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
      

            <Form onSubmit={HandleSubmitNewArticle}>
  <Form.Group controlId="formGridTitle">
    <Form.Label>Title</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Group controlId="formGridContent">
    <Form.Label>Article Content</Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridDate">
      <Form.Label>Publish Date</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridImage">
      <Form.Label>Image URL</Form.Label>
      <Form.Control/>
      
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLikes">
      <Form.Label>Likes</Form.Label>
      <Form.Control />
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

      </Modal> */}



      </div>
    </Router>
  );
};

export default Home;
