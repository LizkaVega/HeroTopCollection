import { Card, Avatar } from 'flowbite-react';

const teamMembers = [
  {
    name: 'Bonnie Green',
    position: 'CEO & Web Developer',
    description: 'Bonnie drives the technical strategy of the Flowbite platform and brand.',
    imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png',
  },
  {
    name: 'Jese Leos',
    position: 'CTO',
    description: 'Jese drives the technical strategy of the Flowbite platform and brand.',
    imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
  },
  {
    name: 'Jese Leos',
    position: 'CTO',
    description: 'Jese drives the technical strategy of the Flowbite platform and brand.',
    imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
  },
  {
    name: 'Jese Leos',
    position: 'CTO',
    description: 'Jese drives the technical strategy of the Flowbite platform and brand.',
    imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Sobre Nosotros</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind.
          </p>
        </div>
        
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex items-center">
                <Avatar
                  img={member.imageUrl}
                  alt={`${member.name} Avatar`}
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                />
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">{member.position}</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    {member.description}
                  </p>
                  <ul className="flex space-x-4 sm:mt-0">
                    <li>
                      <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        {/* Facebook Icon */}
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    {/* Repeat for other icons like Twitter, GitHub, etc. */}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
