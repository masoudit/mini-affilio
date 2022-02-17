// A mock function to mimic making an async request for data
export function fakeAPI(data) {
  return new Promise((resolve) => setTimeout(() => resolve({ data }), 500));
}
