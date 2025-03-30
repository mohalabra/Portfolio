import { Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 border-2 border-b-2 border-gray-500 pt-4 text-center py-4">
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Mohamed Labrassi. All Rights Reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
