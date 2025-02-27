import { useEffect, useState } from "react";

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

    useEffect(() => {
        if (episode && episode.conversations.length > 0) {
            setVisibleLines(0);
            const interval = setInterval(() => {
                setVisibleLines(prev => {
                    if (prev < episode.conversations.length) {
                        return prev + 1;
                    } else {
                        return prev;
                    }
                });
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [episode]);

    if (!episode) return <p>Loading...</p>;

    return (
        <div>
            <h2>{episode.title}</h2>
            <p><strong>Plot</strong>: {episode.plot}</p>
            <h3>Conversations:</h3>
            {episode.conversations.slice(0, visibleLines).map((line, index) => (
                <p key={index}>
                    <strong>{line.person}:</strong> {line.said}
                </p>
            ))}
        </div>
    )
}

export default Conversation;