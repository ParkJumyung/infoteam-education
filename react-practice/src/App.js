import './App.css';
function List({ name, finish }) {
  if (finish) {
    return <li id="seleted" className='list'>{name} ✔  </li>

  }
  return <li className='list'>{name} </li>;
}

function App() {
  return (
    <section>
      <h1> To do list</h1>
      <ul>
        <List
          finish={true}
          name="화확과제 하기"
        />
        <List
          finish={true}
          name="심화글쓰기 하기"
        />

        <List
          finish={false}
          name="운동하기"
        />
        <List
          finish={false}
          name="미적분 복습하기"
        />
        <List
          finish={false}
          name="물리학 과제하기"
        />
      </ul>
      <h2 class='number'>5</h2>

    </section>


  );


}





export default App;
