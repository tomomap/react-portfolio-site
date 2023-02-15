import { requestStates } from '../constants';
import { useSkills } from '../customHooks/useSkills';

export const Skills = () => {
  const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();


  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
          {
            fetchRequestState === requestStates.loading && (
              <p className='description'>取得中...</p>
            )
          }
          {
            fetchRequestState === requestStates.success && (
              sortedLanguageList().map((item, index) => (
                <div className="figure-container-item" key={index}>
                  <p className="description"><strong>{item.language}&nbsp;...{converseCountToPercentage(item.count)}%</strong></p>
                  <div className="progress-bar">
                    <div className="progress-bar-done" style={{ width: `${converseCountToPercentage(item.count)}%` }}></div>
                  </div>
                </div>
              ))
            )
          }
          {
            fetchRequestState === requestStates.error && (
              <p className="description">エラーが発生しました</p>
            )
          }
        </div>
      </div>
    </div>
  );
};