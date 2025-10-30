import type { singleMatch } from "./Matches";

type MatchProps = singleMatch & {
    onDelete: (id: number) => void;
};

export default function OneMatch({ id, title, score, onDelete }: MatchProps) {
    return (
        <div className="match-item">
            <div className="match-info">
                {title} - {score}
            </div>
            <button className="delete-match-button" onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
}
