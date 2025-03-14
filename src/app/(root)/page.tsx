import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = {firstName: 'user_First_Name'};
  return (
    <section className="home">
     <div className="home-content">
      <header className="home-header">
        <HeaderBox 
        type="greeting"
        title="Welcome"
        user={loggedIn?.firstName || 'Guest'}
        subtext="Access and manage your account and transactions efficiently."
        />
      </header>

      <TotalBalanceBox
      accounts={[]}
      totalBanks={1}
      totalCurrentBalance={3820.64}
      />

     </div>
    </section>
  )
}

export default Home