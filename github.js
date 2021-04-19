class Github {
  constructor() {
    this.client_id = '7f1ac86df6344ed017eb';
    this.clent_secret = '021b11b42f2310ab0d07e22aefefbf87af7b5b54';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.clent_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}