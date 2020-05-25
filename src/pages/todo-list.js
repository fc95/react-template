import React, { useState, useEffect, useRef } from 'react';
// import styles from './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { Toast, List, InputItem, Flex, WhiteSpace, Icon } from 'antd-mobile';
import styles from './index.less';
import * as actions from '../redux/actions';

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoList);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleItemAdd = () => {
    if (!inputValue) {
      Toast.info('Todo input can\'t empty', 1);
      return;
    };
    dispatch({
      type: actions.TODOADD,
      payload: inputValue,
    });
    setInputValue('');
    if (inputRef.current) inputRef.current.focus();
  }

  const handleItemDelete = index => {
    dispatch({
      type: actions.TODODELETE,
      payload: index,
    });
  }

  return <div>
    <WhiteSpace size="xs" />
    <Flex justify="between" style={{ backgroundColor: '#fff' }}>
      <InputItem ref={inputRef} value={inputValue}
        onChange={v => setInputValue(v)} className={styles.todoInput}
      />
      <Icon type="check-circle-o" className={styles.todoSaveBtn}
        onClick={handleItemAdd} size="lg"
      />
    </Flex>
    <WhiteSpace size="md" />
    <div>
      {
        todoList.map((todo, index) => (
          <List key={index}>
            <List.Item
              extra={<Icon type="cross-circle" onClick={() => handleItemDelete(index)} size="md" />}
            >
              {todo}
            </List.Item>
          </List>)
        )
      }
    </div>
  </div>
};

export default TodoList;
