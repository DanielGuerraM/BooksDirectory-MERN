import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

import './homepage.scss'

export function HomePage() {

  const token = localStorage.getItem('token');
  // console.log(token);

  const USERS_ENDPOINT = `http://localhost:4000/api/users`;
  const ALLBOOKS_ENDPOINT = 'http://localhost:4000/api/books';
  const CREATENEWBOOK_ENDPOINT = 'http://localhost:4000/api/books/create';

  const [names, setNames] = useState();
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    title: '',
    author: '',
    publishYear: '',
    nationality: ''
  });

  const { title, author, publishYear, nationality } = inputs

  const navigate = useNavigate();

  useEffect(() => {
    if(token){

      axios
        .get(USERS_ENDPOINT, {
          headers: {
            token: token
          }
        })
        .then(({ data }) => {
          // console.log(data);
          setNames(data.user.names);
        })
        .catch((err) => {
          console.log(err)
          navigate('/')
        });

      axios
        .get(ALLBOOKS_ENDPOINT, {
          headers: {
            token: token
          }
        })
        .then(({ data }) => {
          setBooks( data )
        })
        .catch(err => console.log(err))
    }
  }, [token]);


  const handleLogOut = () => {
    window.localStorage.removeItem('token');
    navigate('/');
  }

  const handleCreateBook= async(e) => {
    e.preventDefault();

    if(title !== '' && author !== '' && publishYear !== '' && nationality !== ''){
      const newBook = {
        title,
        author,
        publishYear,
        nationality
      };

      setLoading(true);
      await axios
        .post(CREATENEWBOOK_ENDPOINT, newBook)
        .then(({ data }) => {
          setMessage(data.Message)
          setInputs({ title: '', author: '', publishYear: '', nationality: '' })
          setTimeout(() => {
            setMessage('')
            setLoading(false)
          }, 1000)
        })
        .catch((err) => {
          setMessage('Something went wrong');
          setTimeout(() => {
            setMessage('');
            setLoading(false);
          }, 1000);
        })
    }
    else{
      setLoading(true);
      setMessage('All fields are required');
      console.log(inputs);
      setTimeout(() => {
        setMessage('');
        setLoading(false);
      }, 1000)
    }
  }

  return (
    <>
      <div className="home_container">
        <div className="home_contain">
          <div className="banner">{names ? `Welcome back ${names}` : 'Oh, Who are you?'}</div>
          <div>
            {message && <div className='formMessage'><span className='span'></span>{message}</div>}
            <form className="form_container" onSubmit={(e) => handleCreateBook(e)}>
              <h2>Create a new book</h2>
              <div className="input_container">
                <div className="left">
                  <label>Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title of the book"
                    autoComplete="off"/>
                </div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
                  <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
                  <path d="M9 8h6"></path>
                </svg>
              </div>

              <div className="input_container">
                <div className="left">
                  <label>Author</label>
                  <input
                    type="text"
                    id="author"
                    name="author"
                    placeholder="Author of the book"
                    autoComplete="off"/>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
              </div>

              <div className="input_container">
                <div className="left">
                  <label>Publish year</label>
                  <input
                    type="date"
                    id="publishYear"
                    name="publishYear"
                    placeholder="Year of publication"
                    autoComplete="off"
                    max={new Date().toISOString().split("T")[0]}/>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
                  <path d="M16 3v4"></path>
                  <path d="M8 3v4"></path>
                  <path d="M4 11h16"></path>
                  <path d="M11 15h1"></path>
                  <path d="M12 15v3"></path>
                </svg>
              </div>
              
              <div className="input_container">
               <div className="left">
                <label>nationality</label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    placeholder="Country of origin"
                    autoComplete="off"/>
               </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-language" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 5h7"></path>
                    <path d="M9 3v2c0 4.418 -2.239 8 -5 8"></path>
                    <path d="M5 9c0 2.144 2.952 3.908 6.7 4"></path>
                    <path d="M12 20l4 -9l4 9"></path>
                    <path d="M19.1 18h-6.2"></path>
                </svg>
              </div>

              <button className="create_button">Create a new book</button>
            </form>
          </div>
        </div>

        <div className="home_contain">
          <div className="nav">
            <h2>Books</h2>

            <button className="logOutButton" onClick={handleLogOut}>Log Out</button>
          </div>
          <div className="books_list">
            <div>
              <ul className="list_container">
                {books.map(book => {
                  return(
                    <div key={book._id} className="book_contain">
                      <li className="list_contain">
                        <div>
                          <h3>{book.title}</h3>
                          <p>{book.author}</p>
                        </div>
                        <div>
                          <p>{book.publishYear}</p>
                          <p>{book.nationality}</p>
                        </div>
                      </li>
                      <div>
                        <button className="book_button  edit_button">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                            <path d="M16 5l3 3"></path>
                          </svg>
                        </button>
                        <button className="book_button delete_button">
                          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 7l16 0"></path>
                            <path d="M10 11l0 6"></path>
                            <path d="M14 11l0 6"></path>
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
