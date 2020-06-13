import {
  asUUIDv4,
  expectUUID,
  expectUUIDv4,
  isUUIDv4,
  UUID,
  uuid4,
  UUIDv4,
} from '.';

describe('isUUIDv4', () => {
  let result: boolean;

  describe('called with a valid UUID 4 string', () => {
    beforeEach(() => {
      result = isUUIDv4('72d32e5d-2608-4e1e-a334-dcd0f2e978a8');
    });

    it('returns true', () => {
      expect(result).toBe(true);
    });
  });

  describe('called with a non UUID string', () => {
    beforeEach(() => {
      result = isUUIDv4('not a UUID');
    });

    it('returns false', () => {
      expect(result).toBe(false);
    });
  });
});

describe('isUUID', () => {
  let result: boolean;

  describe('called with a valid UUID 4 string', () => {
    beforeEach(() => {
      result = isUUIDv4('72d32e5d-2608-4e1e-a334-dcd0f2e978a8');
    });

    it('returns true', () => {
      expect(result).toBe(true);
    });
  });

  describe('called with a non UUID string', () => {
    beforeEach(() => {
      result = isUUIDv4('not a UUID');
    });

    it('returns false', () => {
      expect(result).toBe(false);
    });
  });
});

describe('asUUIDv4', () => {
  describe('called with a valid UUID 4 string', () => {
    let result: UUIDv4|null;

    beforeEach(() => {
      result = asUUIDv4('72d32e5d-2608-4e1e-a334-dcd0f2e978a8');
    });

    it('result is equal to an identical string', () => {
      expect(result).toBe('72d32e5d-2608-4e1e-a334-dcd0f2e978a8');
    });
  });

  describe('when called with a non-UUID string', () => {
    let result: UUIDv4|null;

    beforeEach(() => {
      result = asUUIDv4('not an uuid');
    });

    it('returns null', () => {
      expect(result).toBeNull();
    });
  });
});

describe('expectUUIDv4', () => {
  let result: UUIDv4|null;
  let error: unknown = null;

  beforeEach(() => {
    result = null;
    error = null;
  });

  describe('called with a valid UUID 4 string', () => {
    beforeEach(() => {
      result = expectUUIDv4('72d32e5d-2608-4e1e-a334-dcd0f2e978a8');
    });

    it('result is equal to an identical string', () => {
      expect(result).toBe('72d32e5d-2608-4e1e-a334-dcd0f2e978a8');
    });
  });

  describe('when called with a non-UUID string', () => {
    beforeEach(() => {
      try {
        expectUUIDv4('not an uuid');
      } catch (err) {
        error = err;
      }
    });

    it('throws', () => {
      expect(error).toBeTruthy();
    });
  });
});

describe('expectUUID', () => {
  let result: UUID|null;
  let error: unknown = null;

  beforeEach(() => {
    result = null;
    error = null;
  });

  describe('called with a valid UUID 4 string', () => {
    beforeEach(() => {
      result = expectUUID('72d32e5d-2608-4e1e-a334-dcd0f2e978a8');
    });

    it('result is equal to an identical string', () => {
      expect(result).toBe('72d32e5d-2608-4e1e-a334-dcd0f2e978a8');
    });
  });

  describe('when called with a non-UUID string', () => {
    beforeEach(() => {
      try {
        expectUUID('not an uuid');
      } catch (err) {
        error = err;
      }
    });

    it('throws', () => {
      expect(error).toBeTruthy();
    });
  });
});

describe('uuid4()', () => {
  let result: UUIDv4;

  beforeEach(() => {
    result = uuid4();
  });

  it('generates a valid version 4 UUID', () => {
    expect(expectUUIDv4(result)).toBeTruthy();
  });
});
