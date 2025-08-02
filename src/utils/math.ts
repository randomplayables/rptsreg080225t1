export function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

export function generateRandomPrime(min: number, max: number): number {
  const primes: number[] = [];
  const start = Math.max(min, 2);
  for (let i = start; i <= max; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  if (primes.length === 0) {
    throw new Error(`No prime numbers in range ${min} to ${max}`);
  }
  const index = Math.floor(Math.random() * primes.length);
  return primes[index];
}