import { Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 mt-8 border-t border-gray-700 pt-4 text-center py-4">
      <Typography variant="body1" className="text-gray-400">
        &copy; {new Date().getFullYear()} Mohamed Labrassi. All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
