export const name = "Job Job";
export const logo = "https://i.imgur.com/FfZYRGL.png";

export function getPresenceData({
	playerState,
}: GameCallbackParams): PresenceData {
	switch (playerState.kind) {
		case "lobby": {
			return { state: "Waiting in lobby" };
		}
		case "Logo": {
			return { state: "Waiting" };
		}
		case "writing": {
			return { state: "Writing a response" };
		}
		case "voting": {
			return { state: "Voting for a response" };
		}
		case "magnets": {
			return { state: "Answering a prompt using magnets" };
		}
		case "resumagnets": {
			return { state: "Filling out their resumé using magnets" };
		}
		case "done": {
			return { state: "Waiting for others to finish" };
		}
		case "postGame": {
			return { state: "Viewing the results" };
		}
	}
	return {};
}
