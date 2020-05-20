import React, { useRef } from 'react';
// import PropTypes from 'prop-types';
import styles1 from './index.css';
import styles2 from './index.less';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/actions';

const App = () => {
  // const [todoList, setTodoList] = useState([]);
  // const store = useStore();
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoList);
  const inputRef = useRef(null);

  // useEffect(() => {
  //   const unSubscribe = store.subscribe(() => {
  //     setTodoList(store.getState().todoList);
  //   })
  //   return () => {
  //     unSubscribe();
  //   }
  // }, []);

  const handleItemAdd = () => {
    if (!inputRef.current) return;
    const currentValue = inputRef.current.value.trim();
    if (!currentValue) {
      console.log('请输入TODO');
      return;
    }
    dispatch({
      type: actions.ADD_TODO,
      payload: currentValue,
    });
    inputRef.current.value = '';
  }

  const handleItemDelete = index => {
    dispatch({
      type: actions.DELETE_TODO,
      payload: index,
    });
  }

  return <div className={`${styles1.hello} ${styles2.bg333}`}>
    <input ref={inputRef} />
    <button onClick={handleItemAdd}>添加</button>
    <ul>
      {
        todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleItemDelete(index)}>删除</button>
          </li>)
        )
      }
    </ul>
  </div>
};

// App.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.string
// };

export default App;
