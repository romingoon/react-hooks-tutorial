import { useReducer } from 'react';

function reducer(state: any, action: any) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;

  const onChange = (e: any) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input
          name='name'
          value={name}
          placeholder='이름을 입력하세요.'
          onChange={onChange}
        />
        <br />
        <input
          name='nickname'
          value={nickname}
          placeholder='닉네임을 입력하세요'
          onChange={onChange}
        />
      </div>

      <div>
        <div>
          <b> 이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
