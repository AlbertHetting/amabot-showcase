import '../index.css';
import BotCard from '../components/botcard.jsx';
import { data } from '../data';

const initialData = data

export function App() {

  return (
<>
  <div>
    {initialData.map((bot) => (
    <BotCard
    key={bot.id}
    developer={bot.developer}
    thumbnail={bot.thumbnail}
    id={bot.id}

  />
    ))}
  </div>
  </>
  
  )
};
export default App
