class Github {
  constructor() {
    this.client_id = '7f1ac86df6344ed017eb';
    this.clent_secret = 'c82b62511e8c98ee4352134275bb761897bea7ee';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.clent_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}