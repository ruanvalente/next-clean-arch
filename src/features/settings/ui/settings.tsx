import { AppearanceSection } from "../widgets/appearance-section.widget";
import { DangerZoneSection } from "../widgets/danger-zone-section.widget";
import { NotificationsSection } from "../widgets/notifications-section.widget";
import { ProfileSection } from "../widgets/profile-section.widget";

export function Settings() {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Configurações</h1>
        <p className="text-gray-600">
          Gerencie suas preferências e configurações da aplicação
        </p>
      </header>

      <div className="space-y-6">
        <ProfileSection />
        <NotificationsSection />
        <AppearanceSection />
        <DangerZoneSection />
      </div>
    </>
  );
}
