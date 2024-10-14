function Guide() {
  return (
    <div id="guide" className="component">

      <h2 className="component_title">
        이 가이드는 초심자를 위한 것입니다. <br />
        아래의 내용을 이미 알고 계시더라도 한번 더 보시면 도움이 되실거라 생각합니다.
      </h2>

      <h3 className="component_tip">
        <span>※스크롤 내리시기 귀찮으신분들을 위해 3줄 요약※</span> <br />
        이벤트는 매 주 한다. 조급해 하지말자. <br />
        매일 상점 새로고침은 필수. <br />
        골드 던전은 조금만 돌자.
      </h3>

      <h4 className="component_text">
        게임을 즐기는 방식에는 다양하게 있지만, <br />
        시간과 금전을 투자했는데 효율적으로 해야 좋지 않겠습니까? <br />
        조금 귀찮으시더라도 변화를 주시는것도 좋다고 봅니다.
      </h4>

      <ul className="first">
        <li><b>상점 이용</b> <br />
          초보자들이 게임을 시작하다보면 영웅 승급을 어려워한다. <br />
          경험치 얻는것도 그렇지만 막상 여쭤보면 재료가 없다는 것이다. <br />
          <ul className="second">
            <li>드워프길드(상점) 에서는 1성(회색배경), 2성(초록배경) 3성(파란배경) 영웅과 장비, 체력포션, 소환 수정, 신화 정수, 문장 등을 판다.</li>
            <li>여기서 구매해야할 목록은 1, 2성 영웅 + 체력포션(할인), 소환 수정(할인), 신화 정수(골드) 이다. 장비는 취향</li>
            <li>
              1, 2성 영웅들은 추 후에 영웅승급 재료와, 영웅육성 오라클,이벤트에 재료가 된다. <br />
              체력포션은 비축이 가능하면서 할인 까지 붙으니 무조건 산다. <br />
              소환 수정도 비축 가능, 할인 까지 되니 구매. <br />
              신화정수(골드)는 300,000 골드나 하지만 다이아(400) or 진급 던전(체력)을 소비하는 것 보다는 300,000가 훨씬 가성비다.
            </li>
            <li>&quot;장비는 취향&quot; 이라는 이유는 장비가 생각보다 가격대가 나간다. 골드 여유가 있으신 분들은 구매</li>
          </ul>
        </li>

        <li><b>이벤트 이용</b> <br />
          메인 UI 우측 상단을 보면 이벤트 - 이벤트 캘린더 를 볼 수 있다. <br />
          <ul className="second">
            <li>용사의 원정 (장비 던전)</li>
            <li>스피릿 제단 (영웅 소환)</li>
            <li>대장장이의 전설 (장비 강화)</li>
            <li>영웅 육성 (영웅 경험치 올리기,  <br />스킬 레벨 올리기, 진급하기 등 포인트 쌓임)</li>
          </ul>
          위 와 같은 이벤트들은 오라클, 이벤트등 으로 1주마다 거의 무조건 한다. <br />
          비 이벤트 기간엔 재화들을 모아놓고 이벤트 기간에 사용하면 마일리지 마냥 + @ 로 준다. <br />
          오라클 + 이벤트가 겹치는 날이 있는데 이 기간엔 무리해서 돌려도 좋다.
        </li>

        <li><b>아레나</b> <br />
          아레나는 이기든 지든 꾸준히 돌자 가끔 꿀보상(소환 수정)을 준다.
        </li>

        <li><b>소환 이벤트</b> <br />
          이건 진짜 좀 호불호가 갈린다. <br />
          확률 2배 이벤트, <br />
          1 + 1 이벤트, <br />
          특정 영웅 15배 이벤트  <br />
          250 뽑  확정 이벤트 (자주 안함 거의 좋은 영웅들만 이벤트함)
          <ul className="second">
            <li>&quot;확률 2배 이벤트 좋다.&quot; 뽑기가 떙길떈 그냥 이떄 하면된다.</li>
            <li>&quot;1 + 1 이벤트&quot;
              <ul className="third">
                <li>이건 솔직히 말장난 같은 느낌이 좀 크다. 전설 확률이 0.5% 다. <br />
                  확률 2배 이벤트 떄는 1%가 되는데 2배떄 2개 뽑으나, 1 + 1 떄 0.5%로 뽑으나 수학적으론 같은 숫자다.
                </li>
                <li>근데 확률 2배 이벤트 때도 1% 밖에 안되니 결국 잘 안뽑힐떄가 있는데 그럴떈 스택이 쌓인다.</li>
                <li>&quot;200회 연속 5성 레전더리 등급 영웅을 획득하지 못할 시&quot; 201회 부터 1회당 확률 5% 씩 누적 증가다. </li>
                <li>ex : 내가 확률 2배 이벤트떄 100 뽑, 150 뽑을 했는데 재수가 없어서 안뽑혔다. <br />
                  그럼 스택이 100, 150 인거다 200 천장이 가까워 오는데 이럴 경우엔 1+1 가 좋은거다.
                  위 예시같을땐 1+1 이득 아닐시엔 2배 이벤트랑 같다 생각함.
                </li>
              </ul>
            </li>
            <li>&quot;특정 영웅 15배 이벤트&quot;
              <ul className="third">
                <li>보통 S ~SSS 급 영웅을 섞어서 0.5% 확률 중에서 특정 영웅 확률이 15배 높다는 것이다.</li>
                <li>어느정도 기본 영웅풀이 있으면 픽 15배 이벤트를 추천. (쓰는 영웅만 쓰기 때문)</li>
                <li>난 어느정도 기본 베이스 영웅도 없다. 그럴땐 그냥 다다익선 1,2 번 이벤트로 5성 영웅이나 늘리자. (케바케) </li>
              </ul>
            </li>
          </ul>
        </li>

        <li><b>과금 효율</b> <br />
          필자는 과금을 많이 안해봐서 잘 모른다. 전문가들이 다 계신다. <br />
          드래곤 패스, 특권카드는 필수
        </li>

        <li><b>길드 컨텐츠</b> <br />
          무조건 하자 열심히 하자 보상이 좋다. 나름 최종컨텐츠로 점수가 올리는 재미가 쏠쏠하다.
          <ul className="second">
            <li>[드래곤 유적] <br />
              드래곤 유적 점수 올리는 재미가 크다.
              <ul className="third">
                <li>난이도 안에서도 점수에 따라 보상이 다르다.</li>
                <li>똑같은 난이도 2번 쳐서 보상을 업그레이드하기 vs 각자 다른 난이도 쳐서 보상 2번 받기</li>
                <li>드래곤이 격파 당한 상태면 보상을 하나 더 받는다. </li>
              </ul>
            </li>

            <li>[타이탄] <br />
              진짜 어려운 컨텐츠다 기믹이 3가지가 돌아가면서 나오니
              영웅 선택도 중요하고 영웅 풀도 중요하다. <br />
              하지만 대충 치지말자 노력 하다보면 빛을 본다. <br />
              기믹이 끝나면 시간이 새로 연장된다. <br />
              타이탄은 추 후에 다른 페이지로 업데이트 예정이다.
            </li>

            <li>[길드전] <br />
              길드전 이기든 지든 8번 다 공격하자 역시 보상이 쏠쏠하다. 맞으면서 배우는 컨텐츠
            </li>
          </ul>
        </li>
      </ul>

    </div>
  );
}

export default Guide;
