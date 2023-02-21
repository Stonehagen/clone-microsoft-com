import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const footerLists = [
    {
      head: "What's new",
      list: [
        { text: 'Surface Pro 9', link: '/linker' },
        { text: 'Surface Laptop 5', link: '/linker' },
        { text: 'Surface Studio 2+', link: '/linker' },
        { text: 'Surface Laptop Go 2', link: '/linker' },
        { text: 'Surface Laptop Studio', link: '/linker' },
        { text: 'Surface Go 3', link: '/linker' },
        { text: 'Microsoft 365', link: '/linker' },
        { text: 'Windows 11 apps', link: '/linker' },
      ],
    },
    {
      head: 'Microsoft Store',
      list: [
        { text: 'Account profile', link: '/linker' },
        { text: 'Download Center', link: '/linker' },
        { text: 'Microsoft Store support', link: '/linker' },
        { text: 'Returns', link: '/linker' },
        { text: 'Order tracking', link: '/linker' },
        { text: 'Virtual workshops and training', link: '/linker' },
        { text: 'Microsoft Store Promise', link: '/linker' },
        { text: 'Flexible Payments', link: '/linker' },
      ],
    },
    {
      head: 'Education',
      list: [
        { text: 'Microsoft in education', link: '/linker' },
        { text: 'Devices for education', link: '/linker' },
        { text: 'Microsoft Teams for Education', link: '/linker' },
        { text: 'Microsoft 365 Education', link: '/linker' },
        { text: 'Education consultation appointment', link: '/linker' },
        { text: 'Educator training and development', link: '/linker' },
        { text: 'Deals for students and parents', link: '/linker' },
        { text: 'Azure for students', link: '/linker' },
      ],
    },
    {
      head: 'Business',
      list: [
        { text: 'Microsoft Cloud', link: '/linker' },
        { text: 'Microsoft Security', link: '/linker' },
        { text: 'Dynamics 365', link: '/linker' },
        { text: 'Microsoft 365', link: '/linker' },
        { text: 'Microsoft Power Platform', link: '/linker' },
        { text: 'Microsoft Teams', link: '/linker' },
        { text: 'Microsoft Industry', link: '/linker' },
        { text: 'Small Business', link: '/linker' },
      ],
    },
    {
      head: 'Developer & IT',
      list: [
        { text: 'Azure', link: '/linker' },
        { text: 'Developer Center', link: '/linker' },
        { text: 'Documentation', link: '/linker' },
        { text: 'Microsoft Learn', link: '/linker' },
        { text: 'Microsoft Tech Community', link: '/linker' },
        { text: 'Azure Marketplace', link: '/linker' },
        { text: 'AppSource', link: '/linker' },
        { text: 'Visual Studio', link: '/linker' },
      ],
    },
    {
      head: 'Company',
      list: [
        { text: 'Careers', link: '/linker' },
        { text: 'About Microsoft', link: '/linker' },
        { text: 'Company news', link: '/linker' },
        { text: 'Privacy at Microsoft', link: '/linker' },
        { text: 'Investors', link: '/linker' },
        { text: 'Diversity and inclusion', link: '/linker' },
        { text: 'Accessibility', link: '/linker' },
        { text: 'Sustainability', link: '/linker' },
      ],
    },
  ];
  return (
    <div className="Footer">
      <div className="Footer-Links">
        {footerLists.map((column) => {
          return (
            <ul>
              <li>
                <h4>{column.head}</h4>
              </li>
              {column.list.map((row) => {
                return (
                  <li>
                    <a href={row.link}>{row.text}</a>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
