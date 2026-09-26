// Photos are shipped with the site, so every visitor sees Macall's real images.
export const INITIAL_PLACEHOLDERS = {
  heroTurquoise: '/photos/macall-turquoise.jpg',
  aboutPortrait: '/photos/macall-portrait.jpg',
  mcSuitMic: '/photos/macall-on-stage.jpg',
  ghanaianPodium: '/photos/macall-at-podium.jpg',
  radioStudio: '',
};
export function usePhotoStore() {
  return { photos: INITIAL_PLACEHOLDERS };
}
