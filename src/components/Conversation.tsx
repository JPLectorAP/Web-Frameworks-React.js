import { useEffect, useState, useRef } from "react";

interface Conversation {
    said: string;
    person: string;
}

interface Episode {
    season: string;
    episode: string;
    seasonNumber: number;
    episodeNumber: number;
    title: string;
    airdate: Date;
    conversations: Conversation[];
    plot: string;
}

function Conversation() {

    const [episode, setEpisode] = useState<Episode | null>(null);
    const [visibleLines, setVisibleLines] = useState<number>(0);
    const intervalRef = useRef<number | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false); 
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/JPLectorAP/friends-api/refs/heads/main/episodes.json")
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setEpisode(data[0]);
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const startConversation = () => {
        if (episode && episode.conversations.length > 0 && !isPlaying) {
            setIsPlaying(true);
            intervalRef.current = setInterval(() => {
                setVisibleLines(prev => {
                    if (prev < episode.conversations.length) {
                        return prev + 1;
                    } else {
                        stopConversation(); // Stop when all lines are shown
                        return prev;
                    }
                });
            }, 1000);
        }
    };

    const stopConversation = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        return () => stopConversation();
    }, []);

    useEffect(() => {
        if (titleRef.current) titleRef.current.style.color = "#535bf2";
    }, [episode])



    if (!episode) return <p>Loading...</p>;

    return (
        <div style={{marginTop: "50px"}}>
            <h2 ref={titleRef}>{episode.title}</h2>
            <p><strong>Plot</strong>: {episode.plot}</p>
            <h3>Conversations:</h3>
            {episode.conversations.slice(0, visibleLines).map((line, index) => (
                <p key={index}>
                    <strong>{line.person}:</strong> {line.said}
                </p>
            ))}

            <div style={{ marginTop: "30px", display: "flex", gap: "10px", justifyContent: "center"}}>
                <button onClick={startConversation} disabled={isPlaying}>
                    Start
                </button>
                <button onClick={stopConversation} disabled={!isPlaying}>
                    Stop
                </button>
            </div>
        </div>
    )
}

export default Conversation;