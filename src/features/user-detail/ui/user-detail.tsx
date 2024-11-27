import { Avatar } from '@/shared/ui/avatar';
import { DetailsInfo, UserDetailWrapper } from './user-detail-styled';

interface UserDetailsProps {
  name: string;
  email: string;
  address: {
    city: string;
    street: string;
  };
  phone: string;
  website: string;
}

export const UserDetails = ({
  name,
  email,
  address,
  phone,
  website,
}: UserDetailsProps) => {
  return (
    <UserDetailWrapper>
      <Avatar name={name} size='large' />
      <DetailsInfo>
        <div>
          Name: <span>{name}</span>
        </div>
        <div>
          Email: <span>{email}</span>
        </div>
        <div>
          City: <span>{address.city}</span>
        </div>
        <div>
          Street: <span>{address.street}</span>
        </div>
        <div>
          Phone: <span>{phone}</span>
        </div>
        <div>
          Website: <span>{website}</span>
        </div>
      </DetailsInfo>
    </UserDetailWrapper>
  );
};
