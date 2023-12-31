import { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = (numbers: number[]) => {
  console.log('평균값 계산중..');
  console.log(numbers);
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a: number, b: number) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);

  const onChange = useCallback((e: any) => {
    setNumber(e.target.value);
  }, []);
  const onInsert = useCallback(
    (e: any) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      inputEl.current?.focus();
    },
    [number, list]
  ); // number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}> 등록 </button>
      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};
export default Average;
