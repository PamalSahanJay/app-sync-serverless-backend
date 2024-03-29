import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getBookById } from './graphql/queries/book'
import { Authenticator } from '@aws-amplify/ui-react';
import ViewBook from './viewBook';

export default function App() {

  const [book, setBook] = useState(null);
  const client = generateClient();

  const getBook = async () => {
    console.log("this is get book by id")
    const book = await client.graphql({
      query: getBookById,
      variables: {
        id: "b43d59e2-6df1-422b-8ebd-b265df4a179f"
      }
    })
    console.log(book)
    setBook(book)

  }

  // useEffect(() => {
  //   console.log("this is use effect")
  //   if(book) {
  //     console.log("set visible")
  //     setVisible(true)
  //   }
  // }, [book])
  

  // const ViewBook = ({ book }) => {
  //   if (!book) return null;
  //   return (
  //     <article>
  //       <h3>{book.title}</h3>
  //       <p>{book.author}</p>
  //       <p>{book.price}</p>
  //     </article>
  //   )
  // }

  return (
    <div>
      <Authenticator loginMechanisms={['email']} socialProviders={['amazon', 'apple', 'facebook', 'google']} variation="modal">
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <section>
              <button onClick={getBook}>Get Boook by Id</button>
              {/* <hr /> */}
              <div>
                {book && <ViewBook books = {book} />}
              </div>
              {/* {visible && <ViewBook book = {book} />} */}
            </section>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}