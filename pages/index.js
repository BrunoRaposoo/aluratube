import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import { createClient } from "@supabase/supabase-js";
import { videoService } from "../src/services/videoService";

function HomePage() {
    const service = videoService();
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [playlists, setPlaylists] = React.useState({});

    React.useEffect(() => {
        console.log("useEffect");
        service
            .getAllVideos()
            .then((dados) => {
                console.log(dados.data);
                const novasplaylists = { ...playlists };
                dados.data.forEach((video) => {
                    if (!novasplaylists[video.playlist]) novasplaylists[video.playlist] = [];
                    novasplaylists[video.playlist].push(video);
                })
                setPlaylists(novasplaylists);
            });
    }, []);


    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                {/* Prop Drilling */}
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <Timeline searchValue={valorDoFiltro} playlists={config.playlists}>
                    conteudo
                </Timeline>
            </div>
        </>

    );
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyleHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 10px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    p {
        padding-top: 2px;
    }
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        margin-left: 1020px;
    }
  `;

const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${({ bg }) => bg});
    background-repeat: no-repeat;
    margin-top: 50px;
    width: 1512px;
    height: 230px;
`;

function Header() {
    return (
        <StyleHeader>
            <StyledBanner bg={config.bg} />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
                <div>
                    <ul className="social-list">
                        <li>
                            <a target={"_blank"} href="https://github.com/BrunoRaposoo">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5C32 2.23858 29.7614 0 27 0Z" fill="black" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.9755 8.192C11.5719 8.192 8 11.7639 8 16.1675C8 19.6905 10.2997 22.6752 13.4312 23.7516C13.8226 23.8006 13.9694 23.5559 13.9694 23.3602C13.9694 23.1645 13.9694 22.6752 13.9694 21.9902C11.7676 22.4795 11.2783 20.9137 11.2783 20.9137C10.9358 19.9841 10.3976 19.7394 10.3976 19.7394C9.66361 19.2501 10.4465 19.2501 10.4465 19.2501C11.2294 19.299 11.6697 20.0819 11.6697 20.0819C12.4037 21.3052 13.5291 20.9626 13.9694 20.7669C14.0183 20.2287 14.263 19.8862 14.4587 19.6905C12.6972 19.4948 10.8379 18.8097 10.8379 15.7272C10.8379 14.8464 11.1315 14.1614 11.6697 13.5743C11.6208 13.4275 11.3272 12.5957 11.7676 11.5192C11.7676 11.5192 12.4526 11.3235 13.9694 12.351C14.6055 12.1553 15.2905 12.1064 15.9755 12.1064C16.6605 12.1064 17.3456 12.2042 17.9817 12.351C19.4985 11.3235 20.1835 11.5192 20.1835 11.5192C20.6239 12.5957 20.3303 13.4275 20.2813 13.6232C20.7706 14.1614 21.1131 14.8954 21.1131 15.7761C21.1131 18.8587 19.2538 19.4948 17.4924 19.6905C17.7859 19.9351 18.0306 20.4244 18.0306 21.1584C18.0306 22.2348 18.0306 23.0666 18.0306 23.3602C18.0306 23.5559 18.1774 23.8006 18.5688 23.7516C21.7492 22.6752 24 19.6905 24 16.1675C23.9511 11.7639 20.3792 8.192 15.9755 8.192Z" fill="white" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a target={"_blank"} href="https://www.linkedin.com/in/bruno-raposo-dev/">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27 0H5C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H27C29.7614 32 32 29.7614 32 27V5C32 2.23858 29.7614 0 27 0Z" fill="#2867B2" />
                                    <path d="M11.6 24H8.2V13.3H11.6V24ZM9.9 11.8C8.8 11.8 8 11 8 9.9C8 8.8 8.9 8 9.9 8C11 8 11.8 8.8 11.8 9.9C11.8 11 11 11.8 9.9 11.8ZM24 24H20.6V18.2C20.6 16.5 19.9 16 18.9 16C17.9 16 16.9 16.8 16.9 18.3V24H13.5V13.3H16.7V14.8C17 14.1 18.2 13 19.9 13C21.8 13 23.8 14.1 23.8 17.4V24H24Z" fill="white" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </StyleHeader>

    )
}

function Timeline({ searchValue, ...props }) {
    const playlistNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];

                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <a target={"_blank"} key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}
