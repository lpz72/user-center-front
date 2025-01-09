import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'lpz出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'ncwu',
          title: 'NCWU',
          href: 'https://www.ncwu.edu.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> lpz Github </>,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        // {
        //   key: 'Ant Design',
        //   title: 'Ant Design',
        //   href: 'https://ant.design',
        //   blankTarget: true,
        // },
      ]}
    />
  );
};
export default Footer;
