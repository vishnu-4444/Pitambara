import UserManager from '@/components/Admin/UserManager';

export default function UsersPage() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User Management</h2>
      <UserManager />
    </div>
  );
}
