interface SignInWithOAuthParams{
  provider: 'github' | 'google';
  providerAccountId: string;
  user: {
    name: string;
    email: string;
    username: string;
    image: string;
  }
}