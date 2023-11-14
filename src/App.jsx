import React, { useContext } from "react";
import './App.css';
import './reset.css';
import ContentBox from "./components/ContentBox";

import styled from 'styled-components';
import Detail from "./components/Detail";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import uuid4 from "uuid4";


// 
// styled-components 사용 부분
let Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
let Header = styled.div`
    position: relative;
    background-image: url();
    background-color: green;
    background-size: 25%;
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
`
let H1 = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 50px;
  color: snow;
  min-width: 450px;
`
let ULT = styled.ul`
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    border: 1px solid white;
    border-radius: 10px;
    list-style: none;
    padding: 15px;
    width: 500px;
`
let LIT = styled.li`
     font-size: 20px;
    border: 1px solid black;
    border-radius: 5px;
    width: 100px;
    padding: 5px;
    text-align: center;
    user-select: none;
    cursor: pointer;
    background-color: ${props=>props.bg };
    color: whitesmoke;
`;
let ULB = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    background-color: black;
    padding: 20px;
    border-radius: 5px;
    margin: 0px auto;
    
`
let LIB = styled.li`
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid white;
    border-radius: 5px;
    cursor: pointer;
`;
let Form = styled.form`
   width: 500px;
    background-color: gray;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 20px;
  
`
let FormDiv = styled.div`
    margin-bottom: 10px;
    display: flex;
`
let Label = styled.label`
    width: 100px;
    display: flex;
    align-items: center;
`
let Input = styled.input`
  width: 100%;
    padding: 5px 10px;
`
let Textarea = styled.textarea`
    resize: none;
    height: 80px;
    width: 100%;
    padding: 5px 10px;
`
let Button = styled.button`
  background-color: rgb(0, 0, 0);
    color: rgb(198, 187, 167);
    font-size: 14px;
    padding: 5px 10px;
    cursor: pointer;
    user-select: none;
    background-color: black;
    text-align: right;
    color: white;
`
let ListDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    background-color: black;
    padding: 20px;
    border-radius: 5px;
    margin: 0px auto;
`
let Pcon = styled.p`
    margin-left: 70px;
    background-color: rgb(37, 33, 33);
    border-radius: 10px;
    padding: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
// 위에는 styled-components
export {
  Container,
  Header,
  H1,
  ULT,
  LIT,
  ULB,
  LIB,
  Form,
  FormDiv,
  Label,
  Input,
  Textarea,
  Button,
  ListDiv,
  Pcon
};

function App() {
  const initialState=[
    {
      id: uuid4(),
      name: "테스트 제목 1",
      content: "테스트 내용 1",
      isDone: true,
      label:'카리나',
    },
    {
      id: uuid4(),
      name: "테스트 제목 1",
      content: "테스트 내용 1",
      isDone: true,
      label:'윈터',
    },
    {
      id: uuid4(),
      name: "테스트 제목 1",
      content: "테스트 내용 1",
      isDone: true,
      label:'닝닝',
    },
    {
      id: uuid4(),
      name: "테스트 제목 1",
      content: "테스트 내용 1",
      isDone: true,
      label:'지젤',
    }
  ]
  const [list,setList]=useState(initialState);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [postSelect,setPostSelect]=useState('');


  let [headerclick1, setHeaderClick1] = useState(false);
  let [headerclick2, setHeaderClick2] = useState(true);
  let [headerclick3, setHeaderClick3] = useState(false);
  let [headerclick4, setHeaderClick4] = useState(false);

  const headerClicks = [headerclick1, headerclick2, headerclick3, headerclick4];

  // function addlist() {
  //   let copy1 = [...name];
  //   let copy2 = [...content];
  //   let copy3 = [...list]
  //   copy1.push(inputName)
  //   copy2.push(inputContent)
  //   setName(copy1);
  //   setContent(copy2);
  //   copy3.push({ name: inputName, content: inputContent })
  //   setList(copy3);
  //   console.log(list);
  // }
  return (
    <Container>
    
      <Routes>
        {/* 메인페이지 */}
        <Route path="/" element={<>
          <Header>
            <H1>어쩌구 저쩌구 아이돌 </H1>
            <ULT>
              <LIT bg={headerclick1==true ? 'red':'blue'} onClick={() => {
               setHeaderClick1(prevState => !prevState);
               setPostSelect('카리나')
               setHeaderClick2(false);
               setHeaderClick3(false);
               setHeaderClick4(false);

              }}>카리나</LIT>

              <LIT bg={headerclick2==true ? 'red':'blue'}onClick={() => {
                setHeaderClick2(prevState => !prevState);
                setPostSelect('윈터')
                setHeaderClick1(false);
                setHeaderClick3(false);
                setHeaderClick4(false);
              }}>윈터</LIT>

              <LIT bg={headerclick3==true ? 'red':'blue'}onClick={() => {
                setHeaderClick3(prevState => !prevState);
                setPostSelect('닝닝')
                setHeaderClick1(false);
                setHeaderClick2(false);
                setHeaderClick4(false);
              }}>닝닝</LIT>

              <LIT bg={headerclick4==true ? 'red':'blue'} onClick={() => {
               setHeaderClick4(prevState => !prevState);
               setPostSelect('지젤')
               setHeaderClick1(false);
               setHeaderClick2(false);
               setHeaderClick3(false);
              }}>지젤</LIT>
            </ULT>
          </Header>
          <Form onSubmit={function(e){
            e.preventDefault();
            const newContentsList={
              id:uuid4(),
              name,
              content,
              isDone:false,
              label:postSelect,
            };
            setList([...list,newContentsList]);
            console.log(list)
          }}>
            <FormDiv>
              <Label>닉네임:</Label>
              <Input type="text" 
              
               onChange={(e) => {
                setName(e.target.value)
                console.log(name);
              }} placeholder="최대 10글자 까지!" value={name}></Input>
            </FormDiv>
{/* input */}
            <FormDiv>
              <Label>내용:</Label>
              <Textarea onChange={(e) => {
                setContent(e.target.value)
                console.log(content);
              }} placeholder="최대 100글자 까지!" value={content}></Textarea>
            </FormDiv>

            <FormDiv>
              <Label>누구한테?</Label>
              <select 
              onChange={(e)=>{setPostSelect(e.target.value)}}
            value={setPostSelect}
              >
                <option value="카리나">카리나</option>
                <option value="윈터">윈터</option>
                <option value="닝닝">닝닝</option>
                <option value="지젤">지젤</option>
              </select>
            </FormDiv>
            <FormDiv style={{ justifyContent: "flex-end" }}>
              <Button type="submit">등록하기!</Button>
               <Link to='/detail'>디테일</Link>
            </FormDiv>
          </Form>
          {/* {headerclick1?(
          <ContentBox list={list} setList={setList} postSelect={postSelect}
          headerclick1={headerclick1} headerclick2={headerclick2} headerclick3={headerclick3}
          headerclick4={headerclick4}
          />):''
          } */}
             {headerClicks.map((click, index) => (
          click ? (
            <ContentBox
              key={index}
              list={list}
              setList={setList}
              postSelect={postSelect}
              headerclick1={index === 0}
              headerclick2={index === 1}
              headerclick3={index === 2}
              headerclick4={index === 3}
            />
          ) : null
        ))}
        </>} />
        <Route path="/detail" element={<Detail Container={Container} ></Detail>} />

      </Routes>

    </Container>
  );
}

export default App;