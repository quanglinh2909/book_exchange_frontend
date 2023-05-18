import PropTypes from "prop-types";
// @mui
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Card,
  Grid,
  Avatar,
  Typography,
  CardContent,
  Button,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Stack,
} from "@mui/material";
// utils
//
import { fDate, fShortenNumber } from "@/utils";
import SvgColor from "./SvgColor";
import Iconify from "./Iconify";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useRef, useState } from "react";
import { PATH_API } from "@/constants";
// ----------------------------------------------------------------------

const StyledCardMedia = styled("div")({
  position: "relative",
  paddingTop: "calc(100% * 3 / 4)",
});

const StyledTitle = styled(Link)({
  height: 44,
  overflow: "hidden",
  WebkitLineClamp: 2,
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
});

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: "absolute",
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const StyledInfo = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  marginTop: theme.spacing(3),
  color: theme.palette.text.disabled,
}));

const StyledCover = styled("img")({
  top: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

// ----------------------------------------------------------------------

export default function BlogPostCard({ post, index }: any) {
  const { image, bookName, author, createdAt } = post;
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;

  // const POST_INFO = [
  //   { number: 20, icon: "eva:message-circle-fill" },
  //   { number: 30, icon: "eva:eye-fill" },
  //   { number: 43, icon: "eva:share-fill" },
  // ];
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [openAction, setOpenAction] = useState(false);
  const handleToggle = (e: any) => {
    setOpenAction((prevOpen) => !prevOpen);
  };
  const handleCloseAction = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpenAction(false);
  };
  useEffect(() => {
    //  console.log(post);
  });
  return (
    <Grid
      item
      xs={12}
      sm={latestPostLarge ? 12 : 6}
      md={latestPostLarge ? 6 : 3}
    >
      <Card sx={{ position: "relative" }}>
        <StyledCardMedia
          sx={{
            ...((latestPostLarge || latestPost) && {
              pt: "calc(100% * 4 / 3)",
              "&:after": {
                top: 0,
                content: "''",
                width: "100%",
                height: "100%",
                position: "absolute",
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: "calc(100% * 4 / 3)",
                sm: "calc(100% * 3 / 4.66)",
              },
            }),
          }}
        >
          <SvgColor
            color="paper"
            src="/assets/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: "absolute",
              color: "background.paper",
              ...((latestPostLarge || latestPost) && { display: "none" }),
            }}
          />
          <StyledAvatar
            alt={author.name}
            src={author.avatarUrl}
            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 24,
                left: 24,
                width: 40,
                height: 40,
              }),
            }}
          />
          <Button
            sx={{ position: "absolute", top: "24px", right: "24px" }}
            ref={anchorRef}
            onClick={(e: any) => handleToggle(e)}
          >
            <MoreVertIcon
              className="show-icon-setting"
              sx={{ color: "#fff", zIndex: "2" }}
            />
            <Stack sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  transform: "translateY(calc(100%))",
                  right: "10px",
                  zIndex: "10",
                  display: openAction ? "block" : "none",
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleCloseAction}>
                    <MenuList
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      autoFocusItem={openAction}
                    >
                      {/* <MenuItem
                        sx={{ textTransform: "none" }}
                        onClick={(e) => {
                          handleCloseAction(e);
                        }}
                      >
                        Sửa
                      </MenuItem> */}
                      <MenuItem
                        sx={{ textTransform: "none" }}
                        onClick={(e) => {
                          handleCloseAction(e);
                        }}
                      >
                        Xóa
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Box>
            </Stack>
          </Button>

          <StyledCover alt={bookName} src={PATH_API + image} />
        </StyledCardMedia>

        <CardContent
          sx={{
            pt: 4,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: "100%",
              position: "absolute",
            }),
          }}
        >
          <Typography
            gutterBottom
            variant="caption"
            sx={{ color: "#fff", display: "block" }}
          >
            {fDate(createdAt)}
          </Typography>

          <StyledTitle
            color="inherit"
            variant="subtitle2"
            underline="hover"
            sx={{
              ...(latestPostLarge && { typography: "h5", height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: "common.white",
              }),
            }}
          >
            {bookName}
          </StyledTitle>

          {/* <StyledInfo>
            {POST_INFO.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: index === 0 ? 0 : 1.5,
                  ...((latestPostLarge || latestPost) && {
                    color: "grey.500",
                  }),
                }}
              >
                <Iconify
                  icon={info.icon}
                  sx={{ width: 16, height: 16, mr: 0.5 }}
                />
                <Typography variant="caption">
                  {fShortenNumber(info.number)}
                </Typography>
              </Box>
            ))}
          </StyledInfo> */}
        </CardContent>
      </Card>
    </Grid>
  );
}
