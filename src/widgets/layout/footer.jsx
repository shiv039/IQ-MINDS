import PropTypes from 'prop-types';
import { Typography, IconButton } from '@material-tailwind/react';

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="w-full px-4 lg:w-6/12">
          <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
            {socials.map(({ color, name, path }) => (
              <a
                key={name}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton
                  color="white"
                  className="rounded-full shadow-none bg-transparent"
                >
                  <Typography color={color}>
                    <i className={`fa-brands fa-${name}`} />
                  </Typography>
                </IconButton>
              </a>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  socials: [
    {
      color: 'gray',
      name: 'twitter',
      path: 'https://www.twitter.com/',
    },
    {
      color: 'gray',
      name: 'youtube',
      path: 'https://www.youtube.com/',
    },
    {
      color: 'gray',
      name: 'instagram',
      path: 'https://www.instagram.com/',
    },
  ],

  copyright: <>Copyright © {year} IQ Minds by </>,
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = '/src/widgets/layout/footer.jsx';

export default Footer;
