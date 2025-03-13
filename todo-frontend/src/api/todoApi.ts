// Example API functions (implement according to your backend)
export const fetchTodosApi = async () => {
  const response = await fetch('/api/todos');
  return await response.json();
};

export const addTodoApi = async (todo: any) => {
  const response = await fetch('/api/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  });
  return await response.json();
};

export const updateTodoApi = async (id: string, updates: any) => {
  const response = await fetch(`/api/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates)
  });
  return await response.json();
};

export const deleteTodoApi = async (id: string) => {
  await fetch(`/api/todos/${id}`, { method: 'DELETE' });
};