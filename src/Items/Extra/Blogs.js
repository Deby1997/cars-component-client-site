import React from 'react';

const Blogs = () => {
  return (
    <div className='text-center p-10'>
      <h1 className='text-red-400'>Question: How will you improve the performance of a React Application?</h1>
      <p >Answer:To make sure that the components should receive only necessary props.DOM operation required to improve the performance of react.Using react component,function rendering to make the performance faster.</p>
      <h1 className='text-red-400'>Question: What are the different ways to manage a state in a React application?</h1>
      <p>Answer:The state is an object that hold information about a certain component.To implement state in our component react provide us with a hook called useState.Frist we import the hook and initialize the state.The correct way of reading state after the updating would be useEffect hook.</p>
      <p className='text-red-400'>Question: How does prototypical inheritance work?</p>
      <p>Answer:It is the feature of javascript used to add methods and properties in javascript.By using this method object can enherit the properties and methods of another object.We used it to get and set property of the object.</p>
      <p className='text-red-400'>Question:Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</p>
      <p>Answer:There use current state and a fuction.here setProducts used as a function.We declared state variable products and set it to 0.React will remembered its current value between re-renders,and provide the most recent one to our function.If we update the current products then we call setProducts.</p>
      <p className='text-red-400'>Question: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</p>
      <p>Answer:The indexOf method returns the first index of a value of an araay.If there is no match then it returns -1.There are aslo so many methods find(),filter(),includes().</p>
      <p className='text-red-400'>Question:What is a unit test? Why should write unit tests?</p>
      <p>Answer:Unit test is a software development process.The testing term is done during the development process by the software developers.unit testing insures that all code meets quality standards before deployed.Unit testing saves times and money,to help the developer to write better code.</p>
    </div>
  );
};

export default Blogs;