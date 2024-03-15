export type FootballerCardProps = {
    firstName: string;
    lastName: string;
}

export const FootballerCardTitle = ({firstName, lastName}: FootballerCardProps) => {
    return (
        <div>
            <div>{firstName} {lastName}</div>
        </div>
    )
}