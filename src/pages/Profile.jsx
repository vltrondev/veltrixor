import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNotification } from '../context/NotificationContext';
import VeltrixorTypography from '../components/ui/VeltrixorTypography';
import VeltrixorButton from '../components/ui/VeltrixorButton';
import VeltrixorCard from '../components/ui/VeltrixorCard';
import VeltrixorSkeleton from '../components/ui/VeltrixorSkeleton';
import useReveal from '../hooks/useReveal';

export default function Profile() {
  useReveal();
  const { user, loading, updateProfile } = useAuth();
  const { showSuccess, showError, showInfo } = useNotification();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const displayName = user?.user_metadata?.full_name || user?.email || 'User';

  const handleEdit = () => {
    setNewName(displayName);
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    if (!newName.trim()) {
      showError('Name cannot be empty');
      return;
    }

    setIsUpdating(true);
    try {
      await updateProfile({ full_name: newName });
      setIsEditing(false);
      showSuccess('Profile updated successfully');
    } catch (err) {
      showError(err.message || 'Failed to update profile');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleChangePassword = () => {
    showInfo('Check your email for password reset instructions');
  };

  const handleAddPayment = () => {
    showInfo('Payment method integration coming soon');
  };

  if (loading) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <VeltrixorSkeleton width="300px" height="2.5rem" style={{ marginBottom: '2rem' }} />
        <VeltrixorCard>
          <VeltrixorSkeleton width="100%" height="200px" />
        </VeltrixorCard>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="reveal">
        <VeltrixorTypography variant="h2" style={{ marginBottom: '2rem' }}>My Profile</VeltrixorTypography>
      </div>

      <div className="reveal">
        <VeltrixorCard style={{ marginBottom: '2rem' }}>
          <VeltrixorTypography variant="h3" style={{ marginBottom: '1.5rem' }}>Personal Information</VeltrixorTypography>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <VeltrixorTypography variant="p" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Full Name</VeltrixorTypography>
              {isEditing ? (
                <input 
                  type="text" 
                  className="vt-input" 
                  value={newName} 
                  onChange={(e) => setNewName(e.target.value)}
                  style={{ maxWidth: '400px' }}
                  autoFocus
                />
              ) : (
                <VeltrixorTypography variant="span" style={{ fontSize: '1.125rem', fontWeight: '600' }}>{displayName}</VeltrixorTypography>
              )}
            </div>
            <div>
              <VeltrixorTypography variant="p" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>Email Address</VeltrixorTypography>
              <VeltrixorTypography variant="span" style={{ fontSize: '1.125rem', fontWeight: '600', opacity: 0.7 }}>{user?.email}</VeltrixorTypography>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            {isEditing ? (
              <>
                <VeltrixorButton 
                  variant="primary" 
                  onClick={handleUpdate} 
                  style={{ marginRight: '1rem' }}
                  disabled={isUpdating}
                >
                  {isUpdating ? 'Saving...' : 'Save Changes'}
                </VeltrixorButton>
                <VeltrixorButton variant="secondary" onClick={() => setIsEditing(false)} disabled={isUpdating}>
                  Cancel
                </VeltrixorButton>
              </>
            ) : (
              <VeltrixorButton variant="secondary" onClick={handleEdit}>
                Edit Profile
              </VeltrixorButton>
            )}
          </div>
        </VeltrixorCard>
      </div>

      <div className="reveal">
        <VeltrixorCard style={{ marginBottom: '2rem' }}>
          <VeltrixorTypography variant="h3" style={{ marginBottom: '1.5rem' }}>Security</VeltrixorTypography>
          <VeltrixorTypography variant="p" style={{ marginBottom: '1.5rem' }}>
            Manage the security of your Veltrixor ID and active sessions.
          </VeltrixorTypography>
          <VeltrixorButton variant="secondary" onClick={handleChangePassword}>Change Password</VeltrixorButton>
        </VeltrixorCard>
      </div>

      <div className="reveal">
        <VeltrixorCard>
          <VeltrixorTypography variant="h3" style={{ marginBottom: '1.5rem' }}>Billing</VeltrixorTypography>
          <VeltrixorTypography variant="p" style={{ marginBottom: '1.5rem' }}>
            You haven't set up a primary payment method yet.
          </VeltrixorTypography>
          <VeltrixorButton variant="primary" onClick={handleAddPayment}>Add Payment Method</VeltrixorButton>
        </VeltrixorCard>
      </div>
    </div>
  );
}
