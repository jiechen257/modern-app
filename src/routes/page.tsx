import { List } from 'antd';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import { Helmet } from '@modern-js/runtime/head';
import { useLoaderData } from '@modern-js/runtime/router';
import Item from '../components/Item';
import type { LoaderData } from './page.data';
import '../styles/utils.css';

// const getAvatar = (users: Array<{ name: string; email: string }>) =>
//   users.map(user => ({
//     ...user,
//     avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.name}`,
//   }));

// const mockData = getAvatar([
//   { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },
//   { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },
//   { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },
//   { name: 'Davis', email: '"t.kqkoj@utlkwnpwk.nu' },
// ]);

function Index() {
  const { data } = useLoaderData() as LoaderData;

  return (
    <div className="container lg mx-auto">
      <Helmet>
        <title>All</title>
      </Helmet>
      <List
        dataSource={data}
        renderItem={info => <Item key={info.name} info={info} />}
      />
    </div>
  );
}

export default Index;
