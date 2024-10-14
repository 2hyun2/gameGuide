import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dungeon() {
    const navigate = useNavigate();

    useEffect(() => {
        alert("준비중입니다.");
        navigate(-1)
    }, [navigate])

  return (
    <div>
      
    </div>
  );
}

export default Dungeon;
