export interface LoginRequest {
  userId: string;
  password: string;
}

export interface LoginResponse {
  name: string;
  userId: string;
  token: string;
}

export interface SignUpRequest {
  userId: string;
  password: string;
  name: string;
}
