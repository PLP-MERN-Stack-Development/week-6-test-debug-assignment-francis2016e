import { fetchBugs, createBug, updateBug, deleteBug } from '../src/api/bugApi';

describe('Bug API', () => {
  const mockBug = { title: 'Test Bug', description: 'This is a test bug' };
  let bugId;

  it('should fetch bugs', async () => {
    const bugs = await fetchBugs();
    expect(Array.isArray(bugs)).toBe(true);
  });

  it('should create a new bug', async () => {
    const createdBug = await createBug(mockBug);
    expect(createdBug).toHaveProperty('_id');
    expect(createdBug.title).toBe(mockBug.title);
    bugId = createdBug._id; // Store the created bug ID for later tests
  });

  it('should update the bug status', async () => {
    const updatedBug = await updateBug(bugId, { status: 'in-progress' });
    expect(updatedBug).toHaveProperty('status', 'in-progress');
  });

  it('should delete the bug', async () => {
    const response = await deleteBug(bugId);
    expect(response).toBe(true); // Assuming the delete function returns true on success
  });
});